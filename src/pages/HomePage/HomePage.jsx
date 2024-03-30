import MainBanner from '../../Components/MainBanner/MainBanner';
import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import SomeUsers from '../../Components/SomeUsers/SomeUsers';
import { useLoaderData } from 'react-router-dom'


function HomePage() {
  let schools = useLoaderData()
 
  schools = schools.slice(0, 4)

  return (
    <PageWrapper>
      <MainBanner/>
      <SomeUsers schools={schools}/>
    </PageWrapper>
  );
}

export default HomePage;
