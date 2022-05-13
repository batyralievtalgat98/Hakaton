import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';



const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={5}
                  >
                    A GIFT OF THE LAND
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: 'auto', verticalAlign: 'middle' }}
                    >
                      Created by winemaker Derek Rohlffs, Bravium is the culmination of meticulous care in the vineyards and a patient approach in the cellar. Derek takes his cues from tradition. He doesn’t alter what the earth gives him. He’s a classic minimalist.


                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%' }}
                    image="http://russkayakuhnya1.ru/wp-content/uploads/2015/01/vino-foto-03-e1420901953529.jpg"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%' }}
                    image="http://russkayakuhnya1.ru/wp-content/uploads/2015/01/vino-foto-01-e1420901816880.jpg"
                    alt="JAWS"
                    ml={8}
                  />
                </Grid>

                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    sx={{ align: 'center' }}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    ml={5}
                  >
                    A HAWK IN FLIGHT

                    <Typography variant="h5" color="text.secondary" paragraph>
                    Of Cherokee descent, winemaker Derek Rohlffs was gifted the name “Winter Hawk” as a young boy. Intuitively connected to the land—Cherokee means “those who live in the mountains”—Derek has always felt a mysterious pull to nature, even as a child. To hear him tell it, the vineyard is his destiny.
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>
        {/* End hero unit */}

      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}
