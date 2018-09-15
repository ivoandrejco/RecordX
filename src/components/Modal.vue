<template>
<v-dialog max-width="500px">
  <v-card>
    <v-card-title>
      Dialog 2
    </v-card-title>
    <v-card-text>

        Dialog
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    dialog: false
  }
}
</script>
