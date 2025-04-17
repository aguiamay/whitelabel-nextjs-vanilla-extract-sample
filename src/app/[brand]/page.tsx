import { box } from '@/styles/box.css'
import { brandConfig } from '@/config/brandConfig'

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const resolvedParams = await params
  const config = brandConfig[resolvedParams.brand]

  if (!config) {
    return <h1>Erro: Marca não encontrada</h1>
  }

  const { title, description } = brandConfig[resolvedParams.brand]

  return <>
    <h1>{title}</h1>
    <p>{description}</p>
    <div className={box}>Página com tema dinâmico 🎨</div>
  </>
}