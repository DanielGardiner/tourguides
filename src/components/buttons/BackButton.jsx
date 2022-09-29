import { useRouter } from 'next/router'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      className={`text-blue-600`}
      onClick={() => router.back()}
    >&#8592; Back</button>
  )
}
