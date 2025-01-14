type SlShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-show': SlShowEvent;
  }
}

export default SlShowEvent;
