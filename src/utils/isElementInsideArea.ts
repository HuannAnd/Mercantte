export default function (element: HTMLElement, isInsideAt: HTMLElement) {
  const { x, y } = element.getBoundingClientRect();

  return [x, y];
}