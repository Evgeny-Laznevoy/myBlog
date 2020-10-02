module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "./src/assets/_mixins.scss";
                `
        }
      }
    }
  };