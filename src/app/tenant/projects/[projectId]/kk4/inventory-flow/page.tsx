import { useRouter } from 'next/navigation';

export default function Page({ params } : { projectId: string }) {
  const router = useRouter();

  router.push(`/tenant/projects/${params.projectId}/kk4/inventory-flow/overview`);
}
