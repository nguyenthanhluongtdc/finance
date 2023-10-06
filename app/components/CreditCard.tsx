'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Link from 'next/link';

export default function CreditCard({finance}:{finance: any}) {
  return (
    <Card className='mx-auto my-4 sm:my-7 p-2 md:p-3 ' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, display: 'flex' }}
        title={finance.name}
      >
        <Link className='m-auto' href={finance.link}>
        <Image alt={finance.name} sizes="100vw" width={0} height={0} style={{width:'100%', height:'auto', maxHeight: '140px'}} src={'/images/'+finance.img_src} />
        </Link>
      </CardMedia>
      <CardContent>
        <Link className='m-auto no-underline' href={finance.link}>
          <Typography gutterBottom variant="h5" component="h4"> {finance.name} </Typography>
        </Link>
        <Typography variant="body2" color="text.primary" className='mb-3 flex'> 
          <b>Khoản vay đầu:</b> 
          <span style={{textAlign:'right', marginLeft:'auto', flex:'1'}} > {finance.new_member} </span> 
        </Typography>
        <Typography variant="body2" color="text.primary" className='mb-3 flex'> 
          <b> Vay tối đa: </b> 
          <span style={{textAlign:'right', marginLeft:'auto', flex:'1'}} > {finance.max}  </span>
        </Typography>
        <Typography variant="body2" color="text.primary" className='mb-3 flex'> 
          <b> Độ tuổi: </b> 
          <span style={{textAlign:'right', marginLeft:'auto', flex:'1'}} > {finance.age} </span>
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-between'}}>
        <Button title='Vay ngay' size="small" variant='contained' onClick={()=>{window.location.href = finance.link }} > Vay ngay </Button>
        <Button title='Chi tiết' size="small" variant='outlined'> Chi tiết </Button>
      </CardActions>
    </Card>
  );
}