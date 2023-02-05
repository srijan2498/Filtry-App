import { BsCardImage } from 'react-icons/bs';
import React from 'react'
import { MdOutlineAutoAwesome } from 'react-icons/md';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { ImDownload } from 'react-icons/im';

export const stepsData = [
    {
        image: < BsCardImage />,
        label: "01. Upload Your Photo",
        detail: "Open your image in the Photo Editor."
    },
    {
        image: <MdOutlineAutoAwesome />,
        label: "02. Select an Effect",
        detail: "Choose an effect that fits your desired aesthetic."
    },
    {
        image: <TbAdjustmentsHorizontal />,
        label: "03. Adjust the Effect",
        detail: "Use the corresponding sliders to adjust the filter."
    },
    {
        image: <ImDownload />,
        label: "04. Download Your Photo",
        detail: "Save your photo."
    },
]