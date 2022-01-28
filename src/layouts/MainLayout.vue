<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Asset Management App
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
       <q-img src="../assets/hero19.png" style="height: 220px">
          <div class="bg-transparent">
            <q-avatar size="120px" class="q-mb-sm">
              <img src="../assets/pic_sid189-0-norm.png">
            </q-avatar>
            <div class="text-weight-bold">Daniel Field</div>
            <div>daniel@example.com</div>
          </div>
        </q-img>
        <div>
    <q-list>
      <q-item>
        <q-item-section>
         <q-item to="/users">
           USERS
         </q-item>
        </q-item-section>
      </q-item>
      <q-separator color="grey" />
      <q-item>
        <q-item-section>
           <q-item to="/equipments-category">EQUIPMENTS</q-item>
        </q-item-section>
      </q-item>
      <q-separator color="grey" />
      <div style="margin-top:280px">
      <q-separator color="grey" />
      <q-item>
        <q-item-section>Settings</q-item-section>
      </q-item>
      <q-item>
        <q-item-section>Logout</q-item-section>
      </q-item>
     
      </div>
    </q-list>
        </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
/*import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]; */

export default {
  name: 'MainLayout',
  //components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false
     // essentialLinks: linksData
    }
  }
}
</script>
