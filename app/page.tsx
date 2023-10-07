import  GetData from './utils/GetData';
import CreditCard from './components/CreditCard'
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import banner from '../public/images/banner.jpg';
import EndContent from './components/RootPage/EndContent';

export default async function Home() {
  let data = (await GetData()).props
  return (
   <div>
    <Typography component="div">
      <Typography  variant="h3" gutterBottom component="h1">
        Các Khoản Vay Online Tốt Nhất 2023
      </Typography >
      <Typography className='mb-5' component="p">
        So sánh các khoản vay cá nhân online từ nhiều ngân hàng để tìm ra khoản vay với lãi suất và ưu đãi tốt nhất.
      </Typography>
      <Typography className='mb-8' component="p">
        Khoản vay online là một lựa chọn thông minh để vay tiền nhanh chóng. 
        Thông thường, các khoản vay cá nhân online có lãi suất hàng năm từ 6% đến 36%, và số tiền có thể vay từ 500.000đ đến 40.000.000đ.
      </Typography>
    </Typography>
    
    <Typography component="div" sx={{backgroundColor:'#3cc4ff'}}>
      <Typography component="div" sx={{background:`url(${banner.src}) top no-repeat `, backgroundSize:'contain'}}>
        <Grid container className='justify-between' sx={{paddingTop: {xs: '60px', md:'150px'}, paddingLeft: {xs: '2px', md:'25px'}, paddingRight: {xs: '2px', md:'25px'}}}>
          {
            data.map( (item: any) => 
              <Grid xs={12} sm={6} md={4} className='px-3'>
                <CreditCard finance={item} />
              </Grid>
            )
          }
        </Grid>
      </Typography>
    </Typography>
    <EndContent />
   </div>
  )
}