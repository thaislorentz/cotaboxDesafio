export default {
    name: 'InputComponent',
    props: {
      type: {
        type: String,
        default: "text"
      },
      placeholder: String,
      modelValue:  {
        type: [String, Number],
        default: "",
      },
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      }
    }
  }