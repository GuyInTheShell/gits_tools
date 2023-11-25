// I wanted a factory so as not to have to go through composition.
// What bothers me with composition is that all my components will have one input and one event and they all have to wire it
// the same way which seems a bit cumbersome and redundant.
//
// I was able to make a "simple" factory work as below but one thing I don't see how to do easily with that is going to be 
// more complicated cases where I need to inject some HTML code in the template (in some slot)
// Just doing some string processing is not going to be enough because I also need to know all the components dependencies
// to fill in the `components` attributes for Vue to recognize the tag.
import BaseTransformer from './BaseTransformer.vue'

export function makeTransformer(title: string, transform: Function) {
  return {
    components: { BaseTransformer },
    props: ['input'],
    emits: ['valueChange'],
    methods: { transform },
    template: `
      <BaseTransformer :input="this.input" @value-change="(out) => $emit('valueChange', out)" title="${title}" :transform="this.transform" />
    `,
  }
}
