import React from 'react';
import {
    EmailIcon,
    EmailShareButton, FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon,
    WhatsappShareButton
} from "react-share";

import {Typography} from "@mui/material";


const ShareBar = props =>  {

    const { product, url } = props;
    const shareQuote = "Ayúdanos a difundir los productos que tiene el MDA. ";
    const emailBody = "Ayúdanos a difundir los productos de Mercado Digital Anticorrupción, este producto en particular te podría parecer interesante ";
    const basePath = "https://mda.plataformadigitalnacional.org" + url
    const isRound = true;
    const iconSize= 35;

    console.log( product)
        return (
            <div>
                <Typography variant="h6" title={"Comparte a través de tus redes sociales!!!"}>
                    Comparte !!!
                </Typography>
                <EmailShareButton url={ basePath }
                                  subject={ shareQuote }
                                  body={`${ emailBody } // ${ product.name } // ${product.abstract}`}
                                  title={"Comparte por medio de correo electronico"}
                >
                    <EmailIcon  round= { isRound } size={ iconSize }/>
                </EmailShareButton>
                <WhatsappShareButton url={ basePath }
                                     title={ shareQuote }
                                     separator={" --> "}
                >
                    <WhatsappIcon  round= { isRound } size={ iconSize }/>
                </WhatsappShareButton>
                <FacebookShareButton url={ basePath }
                                     quote ={ 'Test Quote'}
                >
                    <FacebookIcon  round= { isRound } size={ iconSize }/>
                </FacebookShareButton>
                <TwitterShareButton url={basePath}
                                    title={ `${emailBody}  -->  ${product.name}`}
                                    hashtags={['MDA', 'PND', 'LaPDNAvanza','Anticorrupción','Innovación']}>
                    <TwitterIcon round= { isRound } size={ iconSize }/>
                </TwitterShareButton>

                <TelegramShareButton url={ basePath }>
                    <TelegramIcon  round= { isRound } size={ iconSize }/>
                </TelegramShareButton>
            </div>
        );

}

export default ShareBar;