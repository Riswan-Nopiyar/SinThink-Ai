declare namespace JSX {
    interface IntrinsicElements {
      'gradio-app': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { src: string }, // Add the 'src' property here
        HTMLElement
      >;
    }
  }
  