
import './btnNotifications.css'

export const BtnNotifications = () => {
  return (
    <div className='container__Notifications'>
      <div className='Notifications__campana'>
        <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
      <div className='Notifications__globo'>
        <i class="fa fa-globe" aria-hidden="true"></i>
      </div>
      <div className='Notifications__icom'>
        <div className='icom__logo'></div>
      </div>
    </div>
  )
}
