<template>
  <v-container>
    <v-flex d-flex>
      <v-layout :wrap="false">
        <h3>{{ title }}</h3>
        <br />
      </v-layout>
    </v-flex>
    <v-flex d-flex>
      <v-layout :wrap="false">
        <v-flex md2 v-for="item in listContent" :key="item.id">
          <v-card class="pa-2 cardColor" flat tile>
            <div class="folderBackround">
              <img
                v-bind:width="item.type === 'folder' ? 80 : 60"
                v-bind:src="require('@/assets/' + item.type + '.svg')"
                class="imgFolder"
              />
            </div>
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              <span>{{ item.files }} Arquivos</span>
            </v-card-subtitle>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'InlineList',
  props: {
    title: String,
    listContent: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    alignments: ['start', 'center', 'end']
  }),
  methods: {
    getUrlImage (type) {
      console.log(type)
      if (type) return '@/assets/folder.svg'
      console.log('sai')
      return '@/assets/file.svg'
    }
  }
}
</script>

<style scoped>
.folderBackround {
  width: calc(78px * 1.6);
  height: calc(78px * 1.6);
  position: relative;
  background: var(--label-light) !important;
  border-radius: 8px !important;
}
.folderBackround .imgFolder {
  margin: 0;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.title {
  color: #5f5c5c;
}
.theme--dark .cardColor {
  background-color: transparent;
}

.theme--dark .title {
  color: #85aff9 !important;
}
.theme--dark .folderBackround {
  height: 10em;
  position: relative;
  background: var(--label-dark) !important;
  border-radius: 8px !important;
}
</style>
