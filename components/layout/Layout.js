import MainNavigation from './MainNavigation';
import MainContent from './MainContent';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <MainContent>{props.children}</MainContent>
    </div>
  );
}

export default Layout;
