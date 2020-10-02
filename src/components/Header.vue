<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-menu container">
        <div class="header-top-menu__common-list">
          <img :src="`${svgLocation}`" alt="location" />
          <p>Волгоградская область</p>
        </div>
        <div class="header-top-menu__navigation-list">
          <nav class="button">
            <div class="button__tenders">
              Тендеры
            </div>
            <div class="button__base">
              База подрядчиков
            </div>
            <div
              class="button__servises"
              @click.prevent="visServises = !visServises"
            >
              Другие сервисы
              <img :src="`${visServises ? svgDown : svgDown}`" alt="servises" />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <nav class="header-bottom container">
      <div class="logo-container">
        <router-link to="/">
          <img :src="`${svgLogo}`" alt="logo" />
        </router-link>
        <button class="button-catalog">
          <img :src="`${svgMenu}`" alt="menu" />
          {{ this.buttonCatalog }}
        </button>
      </div>
      <div class="search">
        <div class="ui-input-search">
          <input
            class="ui-input-search__input"
            type="text"
            placeholder="Хочу найти..."
          />
          <button>
            <img :src="`${svgSearch}`" alt="search" />
          </button>
        </div>
      </div>
      <div class="header-bottom__button">
        <button class="header-bottom__button-list">
          <img :src="`${svgList}`" alt="list" />
          {{ this.buttonList }}
        </button>
      </div>
      <div class="header-bottom__profile">
        <div class="header-bottom__profile-logo">
          <span>{{ profileName }}</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import svgDown from "../assets/Down.svg";
import svgUp from "../assets/up.svg";
import svgLocation from "../assets/pin.svg";
import svgLogo from "../assets/Group.svg";
import svgMenu from "../assets/menu.svg";
import svgSearch from "../assets/search.svg";
import svgList from "../assets/paper.svg";

export default {
  name: "mainHeader",
  components: {},
  data() {
    return {
      svgDown: svgDown,
      svgUp: svgUp,
      svgLocation: svgLocation,
      svgLogo: svgLogo,
      svgMenu: svgMenu,
      svgSearch: svgSearch,
      svgList: svgList,
      visServises: false,
      buttonCatalog: "Каталог",
      buttonList: "Список",
      profileName: "A",
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-bottom: 1px solid #eceff1;

  &-top {
    height: 32px;
    margin: 0 auto;
    border-bottom: 1px solid #eceff1;
    background-color: #fafbfc;

    &-menu {
      display: flex;
      height: 100%;
      justify-content: space-between;

      @include container;

      &__common-list {
        display: flex;
        height: 100%;
        align-items: center;
        line-height: 20px;

        img {
          width: 18px;
          margin-right: 8px;
        }

        &:hover {
          cursor: pointer;
          color: rgb(184, 184, 184);
        }

        &:active {
          color: darken($color: rgb(184, 184, 184), $amount: 20%);
        }
      }

      &__navigation-list {
        display: flex;
        height: 100%;
        align-items: center;

        .button {
          display: flex;
          height: 100%;

          &__tenders {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 10px;

            &:hover {
              cursor: pointer;
              background: #eeeeee;
            }

            &:active {
              background: lighten($color: #eeeeee, $amount: 3%);
            }
          }

          &__base {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 10px;

            &:hover {
              cursor: pointer;
              background: #eeeeee;
            }

            &:active {
              background: lighten($color: #eeeeee, $amount: 3%);
            }
          }

          &__servises {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 10px 0 10px 10px;

            &:hover {
              cursor: pointer;
              background: #eeeeee;
            }

            &:active {
              background: lighten($color: #eeeeee, $amount: 3%);
            }

            img {
              height: 32px;
            }
          }
        }
      }
    }
  }

  &-bottom {
    height: 76px;
    display: flex;
    box-sizing: content-box;
    justify-content: space-between;

    @include container;

    .logo-container {
      display: flex;
      height: 100%;
      align-items: center;

      img {
        height: 72px;
        padding: 10px 10px 10px 0;
      }
    }

    .button-catalog {
      display: flex;
      height: 40px;
      width: 116px;
      background: #fed83d;
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-left: 30px;

      &:hover {
        cursor: pointer;
        background: #f7d758;
      }

      img {
        height: 100%;
        width: 30px;
        margin: 0;
      }
    }

    .search {
      width: 530px;
      height: 40px;
      display: inline-block;
      margin: 18px 25px;

      .ui-input-search {
        position: relative;
        height: 100%;
        border: 1px solid #eceff1;
        box-sizing: border-box;
        border-radius: 4px;
        align-items: center;

        &:hover {
          cursor: pointer;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 10px;
          margin: auto 0;
          width: 18px;
          height: 18px;
          background: url(../assets/search.svg) no-repeat;
          background-size: cover;
        }

        &__input {
          height: 100%;
          align-items: center;
          justify-content: center;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          color: #708598;
          padding-left: 14px;
          width: 100%;
        }
      }
    }

    &__button {
      display: flex;
      align-items: center;

      &-list {
        display: flex;
        width: 112px;
        height: 40px;
        border: 1px solid #eceff1;
        box-sizing: border-box;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        background: #fafbfc;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        &:hover {
          cursor: pointer;
          background: #f1f1f1;
        }

        &:active {
          background: lighten($color: #e9e9e9, $amount: 3%);
        }

        img {
          width: 20px;
          margin-right: 8px;
        }
      }
    }

    &__profile {
      display: flex;
      align-items: center;

      &-logo {
        display: flex;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid #eceff1;
        background: #9b51e0;
        align-items: center;
        justify-content: center;

        &:hover {
          cursor: pointer;
        }

        span {
          align-items: center;
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          color: #ffffff;
          // position: absolute;
        }
      }
    }
  }
}
</style>
