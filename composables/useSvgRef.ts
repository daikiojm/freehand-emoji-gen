import { ref, inject, InjectionKey } from '@nuxtjs/composition-api'

export const svgRef = () => {
  const svgElement = ref<SVGElement>()

  return {
    svgElement,
  }
}

type SvgRefType = ReturnType<typeof svgRef>

export const SvgRefKey: InjectionKey<SvgRefType> = Symbol('svgRef')

export const useSvgRef = () => {
  const svgRef = inject(SvgRefKey)

  if (!svgRef) {
    throw new Error(`${SvgRefKey} is not provided`)
  }

  return svgRef
}
