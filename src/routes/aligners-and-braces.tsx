import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aligners-and-braces')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/aligners-and-braces"!</div>
}
