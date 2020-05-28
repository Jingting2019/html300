<script>
export default {
  name: 'child',
  props: ['child'],
}

</script>




Vue.component('child', {
props: ['text'],
template: `<p>{{ text }}</p>`
});
