import { Box, Container, Grid, Typography } from "@mui/material";
import Image from 'next/image'

export default function Footer () {
  return (
    <footer>
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "primary.main",
                marginTop: {xs: "40px", sm: "70px", md: "100px"}
            }}
            className="py-7"
            >
            <Container maxWidth="lg" sx={{color:'white'}}>
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12} className="mb-4 md:mb-9 w-full">
                        <Typography component="div" variant="h6" className="bg-white text-center flex w-full items-center mb-4 justify-center py-1 rounded effect-transform-hover">
                            <Image alt='Logo' sizes="100vw" width={0} height={0} style={{width:'auto', height:'100%', maxHeight:'60px', display:'block'}} src={process.env.pathImage+'logo-web2.png'} />
                            <Typography component="span" color="#000080" className="-mb-2 -ml-1 italic font-bold"> TIEUDUNG247.COM </Typography>
                        </Typography>
                        <Typography color="#eceff1" variant="h6" className="text-center">
                            GIẢI PHÁP TIÊU DÙNG THÔNG MINH
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="#fff" variant="subtitle1" className="text-center">
                        {`${new Date().getFullYear()} `} <br/>
                        Home-Credit | Tin-Vay | JEFF | Đồng 247 | VayMini | On-Credit
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </footer>
  );
};