import React, { Component } from "react";

class Icons extends Component {
  render() {
    return (
      <svg display="none" xmlns="http://www.w3.org/2000/svg">
        {/* chevron */}
        <symbol
          id="icon-chevron"
          viewBox="-1.371 -4.423 16 16"
          overflow="visible"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M.707.707l5.834 5.834L12.33.752"
          />
        </symbol>
        {/* close */}
        <symbol id="icon-close" viewBox="0 0 16 16" overflow="visible">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
            d="M.707 14.826L14.823.707M.707.707l14.116 14.119"
          />
        </symbol>
        {/* hamburger */}
        <symbol id="icon-hamburger" viewBox="0 0 17 14" overflow="visible">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M0 1h17M0 7h17M0 13h17"
          />
        </symbol>
        {/* logo */}
        <symbol id="icon-logo" viewBox="0 0 114 15" overflow="visible">
          <path d="M0 7.255c0-1.1.185-2.098.555-2.992a6.572 6.572 0 0 1 1.544-2.284A6.843 6.843 0 0 1 4.45.533C5.358.195 6.35.029 7.424.029c1.077 0 2.068.166 2.974.504a6.79 6.79 0 0 1 2.351 1.446 6.541 6.541 0 0 1 1.546 2.283c.369.895.555 1.893.555 2.992 0 1.103-.186 2.101-.555 2.995a6.532 6.532 0 0 1-1.546 2.283 6.772 6.772 0 0 1-2.351 1.446c-.905.338-1.896.508-2.974.508-1.074 0-2.065-.17-2.974-.508a6.842 6.842 0 0 1-2.352-1.446 6.59 6.59 0 0 1-1.544-2.283C.185 9.355 0 8.357 0 7.255zm3.149 0c0 .648.1 1.24.3 1.782.203.535.49 1.001.866 1.397.376.395.825.703 1.35.922a4.477 4.477 0 0 0 1.759.333c.649 0 1.235-.111 1.76-.333a3.93 3.93 0 0 0 1.351-.922c.374-.396.663-.862.863-1.397a5.057 5.057 0 0 0 .302-1.782c0-.634-.101-1.223-.303-1.766a4.055 4.055 0 0 0-.863-1.411 3.946 3.946 0 0 0-1.351-.921c-.524-.222-1.11-.33-1.76-.33-.647 0-1.232.108-1.759.33a3.961 3.961 0 0 0-1.35.921 4.098 4.098 0 0 0-.865 1.411c-.2.543-.3 1.132-.3 1.766zM14.653.375h3.459l3.401 9.02h.04l3.459-9.02h3.245l-5.676 13.761h-2.429L14.653.375zM30.084.375h9.348v2.8h-6.315v2.566h5.966v2.798h-5.966v2.8h6.667v2.797h-9.699V.375zM42.482.375h5.325c.7 0 1.363.069 1.992.207.63.136 1.179.362 1.651.679.474.317.85.744 1.128 1.283.278.538.419 1.206.419 2.01 0 .974-.253 1.801-.759 2.479-.505.681-1.244 1.109-2.217 1.292l3.5 5.811h-3.636L47.01 8.634h-1.496v5.502h-3.033V.375zm3.034 5.696h1.787c.271 0 .561-.012.865-.029.303-.02.58-.079.826-.175.244-.097.449-.249.611-.458.162-.207.243-.498.243-.873 0-.351-.071-.629-.212-.836a1.489 1.489 0 0 0-.545-.478A2.425 2.425 0 0 0 48.332 3a6.125 6.125 0 0 0-.835-.057h-1.981v3.128zM55.367.37h9.238v2.8H58.4v2.801h5.738v2.798H58.4v5.367h-3.033V.37zM70.184 14.979l-5.583-3.713 1.551-2.329 3.056 2.031L76.504 0l2.526 1.679-8.846 13.3zM79.205 7.252c0-1.099.186-2.098.553-2.994a6.559 6.559 0 0 1 1.548-2.283 6.767 6.767 0 0 1 2.35-1.449c.909-.338 1.9-.505 2.978-.505 1.075 0 2.07.167 2.976.505a6.785 6.785 0 0 1 2.352 1.449 6.536 6.536 0 0 1 1.546 2.283c.369.896.555 1.896.555 2.994 0 1.105-.186 2.103-.555 2.995a6.53 6.53 0 0 1-1.546 2.286 6.774 6.774 0 0 1-2.352 1.446c-.905.338-1.9.508-2.976.508-1.077 0-2.068-.17-2.978-.508a6.794 6.794 0 0 1-2.35-1.446 6.571 6.571 0 0 1-1.548-2.286c-.367-.893-.553-1.89-.553-2.995zm3.15 0c0 .649.099 1.243.299 1.778.204.539.49 1.008.865 1.402.375.396.826.705 1.354.924.525.222 1.111.333 1.76.333s1.235-.111 1.761-.333a3.927 3.927 0 0 0 1.351-.924 4.07 4.07 0 0 0 .865-1.402c.199-.535.3-1.129.3-1.778 0-.636-.101-1.225-.3-1.769a4.05 4.05 0 0 0-.865-1.408 3.934 3.934 0 0 0-1.351-.925c-.525-.22-1.112-.332-1.761-.332s-1.234.112-1.76.332a3.895 3.895 0 0 0-1.354.925 4.12 4.12 0 0 0-.865 1.408 5.085 5.085 0 0 0-.299 1.769zM94.061.37h3.308l2.196 8.828h.039L102.482.37h2.819l2.857 9.06h.042l2.312-9.06h3.074l-4.027 13.766h-2.702l-3.034-9.526h-.038l-3.033 9.526h-2.608L94.061.37z" />
        </symbol>
        {/* pb */}
        <symbol id="icon-pb" viewBox="0 0 125 125" overflow="visible">
          <path d="M45.371 75h-1.957v-4.264l-4 5.479V91H45.371c4.291 0 7.768-3.709 7.768-8 0-4.289-3.477-8-7.768-8z" />
          <path d="M81.99 0L0 81.99l42.592 42.592 81.99-81.99L81.99 0zM44.578 102h-2.164v13.48l-14-13.355V64h16.164C55.04 64 63.52 72.541 63.52 82.998 63.52 93.463 55.04 102 44.578 102z" />
        </symbol>
        {/* tick */}
        <symbol id="icon-tick" viewBox="0 0 10.311 8.202">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M.707 3.972l2.815 2.816L9.604.707"
          />
        </symbol>
      </svg>
    );
  }
}

export default Icons;