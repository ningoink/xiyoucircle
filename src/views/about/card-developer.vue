<template>
    <section id="developer">
        <div class="cardHeaderWrap">
            <div class="cardHeader">核心贡献者</div>
            <div class="cardHorizontalLine"><span>—</span></div>
            <div class="cardSubheader">更多精彩，等你参与</div>
        </div>
        <div class="img-wrap">
            <div 
                v-for="person in githubDeveloper"
                :key="person.id"
                class="img-card"
            >
                <img 
                    :src="person.avatar"
                    :alt="person.name"
                    v-on:click='openLink(person.github)'
                    class="img-item"
                >
                <p>{{ person.github.split('/')[3] + '@' + person.class }}</p>
                <p></p>
            </div>
        </div>
    </section>
</template>

<script>
import { GITHUB_DEVELOPER } from '@/config/github-developer'

export default {
    name: 'CardDeveloper',
    data: function () {
        return {
            githubDeveloper: GITHUB_DEVELOPER
        }
    },
    methods: {
        openLink (link) {
            window.open(link)
        }
    }
}
</script>

<style scoped lang="scss">
/* Media Queries */

@mixin mq-sm {
  @media (min-width: 620px) {
    @content;
  }
}

@mixin mq-lg {
  @media (min-width: 960px) {
    @content;
  }
}

$container-width: 960px;

#developer {
    margin-bottom: 30px;
    .img-wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 300px;
        margin: auto;
        @include mq-sm {
            width: 600px;
        }
        @include mq-lg {
            width: 900px;
        }
        .img-card {
            flex: 1;
            margin-top: 30px;
            height: 200px;
            min-width: 300px;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            bottom: 20px;
            .img-item {
                // padding-top: 60px;
                min-height: 120px;
                max-height: 120px;
                min-width: 120px;
                max-width: 120px;
                border-radius: 120px;
                cursor: pointer;
                display: block;
                flex: 1;
            }
            p {
                flex: 1;
                padding-top: 10px;
            }
        }
    }
}
</style>
