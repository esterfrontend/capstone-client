import MainBanner from '../../Components/MainBanner/MainBanner';
import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import Professionals from '../../Components/Professionals/Professionals';

function HomePage() {
  return (
    <PageWrapper>
      <MainBanner/>
      <Professionals/>
    </PageWrapper>
  );
}

export default HomePage;
