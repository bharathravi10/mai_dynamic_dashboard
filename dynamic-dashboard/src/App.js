import DashboardPage from './components/dashboard';
import DrawerAppBar from './layout/MainLayout';

function App() {
  return (
    <DrawerAppBar>
      <DashboardPage />
    </DrawerAppBar>
  );
}

export default App;
