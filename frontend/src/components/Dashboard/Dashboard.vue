<template>
  <v-container>
    <h1>Meus Arquivos</h1>

    <v-row>
      <InlineList title="Recentes" :listContent="recent" />
    </v-row>
    <v-row>
    <InlineList title="Pastas" :listContent="folders" />

    </v-row>
  </v-container>
</template>

<script>
import InlineList from '@/components/Lists/InlineList.vue'
export default {
  name: 'DashboardContainer',
  components: {
    InlineList
  },
  data: () => ({
    name: '',
    recent: [
      { title: 'Aniversario', files: 12, type: 'folder' },
      { title: 'Aniversario', files: 12, type: 'file' },
      { title: 'Aniversario', files: 12, type: 'folder' },
      { title: 'Aniversario', files: 12, type: 'folder' },
      { title: 'Aniversario', files: 12, type: 'folder' },
      { title: 'Aniversario', files: 12, type: 'folder' }
    ],
    folders: [
      { title: 'Aniversario', files: 12, type: 'folder' },
      { title: 'Parque', files: 1, type: 'folder' },
      { title: 'Não sei', files: 10, type: 'folder' }
    ]
  })
}
</script>

<style scoped>
.container {
  margin: 0;
}
</style>
