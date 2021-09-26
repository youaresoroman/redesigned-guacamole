import './Component.scss';
import UserBar from '../../Display/UserBar'
import useSliderState from '../../../hooks/useSliderState/useSliderState';
import SlideBar from "../SlideBar"
import UserAccounts from "../UserAccounts"
import useAccountData from '../../../hooks/useAccountData/useAccountData';

const baseURL = "https://redisigned-giacomole-api.nemcsygimt.workers.dev"

function Component() {
  const [, toggle] = useSliderState()
  useAccountData(baseURL)
  
  return (
    <div className="content">
      <div className="header" onClick={toggle}>
        <UserBar />
        <UserAccounts />
      </div>
      <SlideBar />
    </div>
  );
}

export default Component;




