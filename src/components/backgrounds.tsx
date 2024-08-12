const BgLightGradient1 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
  );
};

const BgLightGradient10 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BgDarkGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  );
};

const BgGradientCustom = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[linear-gradient(180deg,_hsla(290,_56%,_38%,_1)_0%,_hsla(0,_86%,_44%,_1)_100%)]" />
  );
};

const CustomGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[linear-gradient(180deg,_hsl(225deg_100%_12%)_0%,_hsl(215deg_84%_19%)_10%,_hsl(212deg_82%_24%)_20%,_hsl(211deg_81%_29%)_30%,_hsl(211deg_80%_32%)_40%,_hsl(210deg_80%_35%)_50%,_hsl(217deg_21%_50%)_60%,_hsl(143deg_1%_56%)_70%,_hsl(49deg_20%_59%)_80%,_hsl(49deg_42%_62%)_90%,_hsl(49deg_64%_64%)_100%)]" />
  );
};

const CustomGradient2 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[linear-gradient(90deg,_hsl(184deg_80%_43%)_0%,_hsl(177deg_48%_52%)_11%,_hsl(165deg_45%_59%)_22%,_hsl(147deg_44%_65%)_33%,_hsl(123deg_43%_70%)_44%,_hsl(100deg_53%_68%)_56%,_hsl(86deg_63%_66%)_67%,_hsl(78deg_72%_64%)_78%,_hsl(72deg_80%_60%)_89%,_hsl(67deg_88%_53%)_100%)]" />
  );
};
const CustomGradient3 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[linear-gradient(320deg,_hsl(256deg_82%_31%)_0%,_hsl(257deg_64%_37%)_9%,_hsl(259deg_56%_41%)_18%,_hsl(261deg_51%_44%)_27%,_hsl(254deg_39%_50%)_36%,_hsl(226deg_39%_54%)_45%,_hsl(208deg_45%_54%)_55%,_hsl(196deg_51%_54%)_64%,_hsl(194deg_51%_61%)_73%,_hsl(196deg_50%_70%)_82%,_hsl(197deg_50%_77%)_91%,_hsl(199deg_52%_84%)_100%)]" />
  );
};

const CustomGradient4 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[linear-gradient(180deg,_hsl(13deg_100%_12%)_0%,_hsl(13deg_92%_18%)_10%,_hsl(13deg_91%_22%)_20%,_hsl(13deg_91%_26%)_30%,_hsl(13deg_90%_29%)_40%,_hsl(13deg_90%_32%)_50%,_hsl(15deg_65%_36%)_60%,_hsl(18deg_53%_38%)_70%,_hsl(23deg_45%_40%)_80%,_hsl(28deg_39%_41%)_90%,_hsl(34deg_34%_42%)_100%)]" />
  );
};

export const BACKGROUND_OPTIONS = [
  {
    name: "Background Light Gradient1 ",
    component: <BgLightGradient1 />,
    theme: "light",
  },
  {
    name: "Background Light Gradient10 ",
    component: <BgLightGradient10 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid ",
    component: <BgDarkGradient1 />,
    theme: "dark",
  },
  {
    name: "Custom Background",
    component: <BgGradientCustom />,
    theme: "dark",
  },

  {
    name: "Custom Background 1",
    component: <CustomGradient1 />,
    theme: "dark",
  },
  {
    name: "Custom Background 2",
    component: <CustomGradient2 />,
    theme: "light",
  },
  {
    name: "Custom Background 3",
    component: <CustomGradient3 />,
    theme: "dark",
  },
  {
    name: "Custom Background 4",
    component: <CustomGradient4 />,
    theme: "dark",
  },
] as const;