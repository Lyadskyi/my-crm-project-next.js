import ActiveLabel from './components/active-label';
import NotActiveLabel from './components/not-active-label';
import PendingLabel from './components/pending-label';
import SuspendedLabel from './components/suspended-label';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not active</NotActiveLabel>
      <PendingLabel>Pending</PendingLabel>
      <SuspendedLabel>Suspended</SuspendedLabel>
    </main>
  );
}
