import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from '@/app/components/magic-button';

// import StatusLabel, { Status } from '@/app/components/status-label';
// import ServerComponent from '@/app/components/server-component';
// import ClientComponent from '@/app/components/client-component';
// import ServerComponentCopy from '@/app/components/server-component-copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
