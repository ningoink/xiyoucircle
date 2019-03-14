<template>
    <section id="timeline">
        <div class="demo-card-wrapper">
            <template v-for="(item, i) in historyList">
                <div :key="item.id" class="demo-card" :class="'demo-card--step' + (i+1)">
                    <div class="head">
                        <div class="number-box">
                            <span>{{ '0' + item.id }}</span>
                        </div>
                        <h2>{{ item.title }}</h2>
                    </div>
                    <div class="body">
                        <p v-for="(t, j) in item.text" :key="j">{{ t }}</p>
                    </div>
                    <div class="foot">
                        <div class="calendar">
                            <!-- icon -->&nbsp;
                        </div>
                        <div class="date">2019-01-01</div>
                        <div class="icon">
                            <!-- icon -->&nbsp;
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import { HISTORY_LIST } from '@/config/history-list'

export default {
    name: 'CardTimeline',
    data: function () {
        return {
            historyList: HISTORY_LIST
        }
    }
}
</script>

<style scoped lang="scss">
/* Media Queries */

@mixin mq-xs {
  @media (min-width: 320px) {
    @content;
  }
}

@mixin mq-sm {
  @media (min-width: 480px) {
    @content;
  }
}

@mixin mq-md {
  @media (min-width: 720px) {
    @content;
  }
}

@mixin mq-lg {
  @media (min-width: 1000px) {
    @content;
  }
}

$background: #f7f7f7;
$box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
$border: 1px solid rgba(191, 191, 191, 0.4);
$items: 7;
$rows: ceil($items/2);

/* Card sizing */

$card-height: 300px;
$card-width: 500px;
$foot-height: 40px;
$inner-margin: 15px;
$number-size: 35px;
$stagger: 180px;
$outer-margin: 90px;
$marker-size: 9px;

/* Colors */

$colors: 
#e51c23,
#009688,
#3551b5,
#ff9800,
#259b24,
#ff4081,
#ff6100;
$timeline: #bdbdbd;

/* Calculations */

// $container-height: $rows * ($card-height + $outer-margin) + $stagger ;
$container-height: $rows * ($card-height + $outer-margin);
$container-width: $card-width*2 + $outer-margin*3;
$head-height: $number-size + 50;
$body-height: $card-height - $head-height;
$marker-dist: $card-width + $outer-margin/2 - $marker-size/2;

/* Placeholders */

@include mq-lg {
  %arrow {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
  }
  %marker {
    position: absolute;
    content: "";
    width: $marker-size;
    height: $marker-size;
    background-color: $timeline;
    border-radius: $marker-size;
    box-shadow: 0px 0px 2px 8px $background;
  }
}


/* Some Cool Stuff */

$counter: $items - $rows + 2;
@for $i from 1 through $rows {
  .demo-card:nth-child(#{$i*2-1})   { order: $i }
  .demo-card:nth-child(#{$i*2})     { order: $counter }
  $counter: $counter + 1;
}

/* Border Box */

* {
  box-sizing: border-box;
}

/* Fonts */

body {
  font-family: Roboto;
}

#timeline {
  background: $background;
  border-top: $border;
  border-bottom: $border;
  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 20px;
  }
  .demo-card-wrapper {
    position: relative;
    margin: auto;
    @include mq-lg {
      display: flex;
      flex-flow: column wrap;
      width: $container-width;
      height: $container-height;
      margin: 0 auto;
    }
    &::after {
      z-index: 1;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: $border;
      @include mq-lg {
        border-left: 1px solid $timeline;
      }
    }
  }
  .demo-card {
    position: relative;
    display: block;
    margin: 10px auto 80px;
    max-width: 94%;
    z-index: 2;
    @include mq-sm {
      max-width: 60%;
      box-shadow: $box-shadow;
    }
    @include mq-md {
      max-width: 40%;
    }
    @include mq-lg {
      // max-width: $card-width;
      width: $card-width;
      height: $card-height;
      margin: $outer-margin;
      margin-top: $outer-margin/2;
      margin-bottom: $outer-margin/2;
      &:nth-child(odd) {
        margin-right: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-left-width: 15px;
          border-left-style: solid;
          left: 100%;
        }
        .head::before {
          @extend %marker;
          left: $marker-dist + 1;
        }
      }
      &:nth-child(even) {
        margin-left: $outer-margin/2;
        .head::after {
          @extend %arrow;
          border-right-width: 15px;
          border-right-style: solid;
          right: 100%;
        }
        .head::before {
          @extend %marker;
          right: $marker-dist - 1;
        }
      }
      &:nth-child(2) {
        margin-top: $stagger;
      }
    }
    .head {
      position: relative;
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 400;
      .number-box {
        display: inline;
        margin: $inner-margin;
        padding: 10px;
        font-size: $number-size;
        line-height: $number-size;
        font-weight: 600;
        background: rgba(0, 0, 0, 0.17);
      }
      h2 {
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: inherit;
        letter-spacing: 2px;
        margin: 0;
        line-height: 1rem;
        @include mq-sm {
          font-size: 130%;
          line-height: 1.2rem;
        }
        span {
          display: block;
          font-size: 0.6rem;
          margin: 0;
          @include mq-sm {
            font-size: 0.8rem;
          }
        }
      }
    }
    .body {
      background: #fff;
      border: $border;
      border-top: 0;
      padding: $inner-margin;
      @include mq-lg {
        height: $body-height - $foot-height;
      }
      p {
        font-size: 12px;
        line-height: 6px;
        margin-bottom: $inner-margin;
      }
    }
    .foot {
      background: #fff;
      border: $border;
      border-top: 0;
      height: $foot-height;
      div {
        height: 100%;
        display: inline-block;
        text-align: center;
        line-height: $foot-height;
      }
      .calendar {
        width: $foot-height;
      }
      .date {
        width: $foot-height * 2;
      }
      .icon {
        width: $foot-height;
        float: right;
      }
    }
    @for $i from 1 through $items {
      &--step#{$i} {
        $color: nth($colors, $i);
        background-color: $color;
        .head::after {
          border-color: $color;
        }
      }
    }
  }
}
</style>
