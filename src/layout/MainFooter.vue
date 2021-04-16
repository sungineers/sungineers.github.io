<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <!-- <li>
            <a href="https://www.creative-tim.com">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              About Us
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li> -->
          <md-list-item
                href="https://twitter.com/sungineers"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Twitter</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.facebook.com/sungineers"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Like us on Facebook</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/sungineers"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Instagram</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.snapchat.com/add/sungineers"
                target="_blank"
              >
                <i class="fab fa-snapchat"></i>
                <p class="hidden-lg">Snapchat</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Snapchat</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://discord.gg/AkhxMZcWf4"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
                <p class="hidden-lg">Discord</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Youtube</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://discord.gg/AkhxMZcWf4"
                target="_blank"
              >
                <i class="fab fa-discord"></i>
                <p class="hidden-lg">Discord</p>
                <md-tooltip md-direction="bottom"
                  >Join our Discord server</md-tooltip
                >
              </md-list-item>
              
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by your friendly <md-icon>engineering</md-icon>'s
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
