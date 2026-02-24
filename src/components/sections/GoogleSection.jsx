import React from "react";
import { Carousel } from "primereact/carousel";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function GoogleSection({ colorMode }) {
  const imgList = Object.values(content.texts.depositions.imagens);

  // Classes dinâmicas conforme colorMode
  let backgroundMode, text, textOpacity;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "dark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      break;

    case "defaultDark":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;

    case "defaultLight":
      backgroundMode = "bg-transparent";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      break;
  }

  // 🔹 Breakpoints do carousel
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1023px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const parceriaTemplate = (item) => {
    return (
      <MotionDivDownToUp className="flex justify-center px-0 tablet2:px-2">
        <img src={item.img} alt={item.alt} className="rounded-md" />
      </MotionDivDownToUp>
    );
  };

  return (
    <SectionArea className={backgroundMode} data-theme={colorMode}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.depositions.miniTag}
          title={content.texts.depositions.title}
          subtitle={content.texts.depositions.subtitle}
          colorMode={colorMode}
        />

        <div className="max-w-[1200px] w-full">
          {" "}
          <Carousel
            value={imgList}
            itemTemplate={parceriaTemplate}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            circular
            autoplayInterval={4000}
            showIndicators
            showNavigators
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default GoogleSection;
