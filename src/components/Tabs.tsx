import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Home from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Whatshot";
import GameIcon from "@material-ui/icons/SportsEsports";
import CodeIcon from "@material-ui/icons/Code";
import MusicIcon from "@material-ui/icons/MusicNote";
import BrushIcon from "@material-ui/icons/Brush";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomePage from "./HomePage";
import ProgramPage from "./Program";
import EventPage from "./Event";
import GamePage from "./Game";
import SoundPage from "./Sound";
import GraphicPage from "./Graphic";
import Window from "./useWindowSize";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));
const GetWidth = () => {
  //画面サイズを取得してwidthだけを返す
  const [width, height] = Window();

  return width;
};

export const Button_A: React.FC = () => {
  //scrollableタブ
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Box display="flex" justifyContent="center" width="100%">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="HOME" icon={<Home />} {...a11yProps(0)} />
            <Tab label="EVENT" icon={<EventIcon />} {...a11yProps(1)} />
            <Tab label="GAME" icon={<GameIcon />} {...a11yProps(2)} />
            <Tab label="PROGRAM" icon={<CodeIcon />} {...a11yProps(3)} />
            <Tab label="SOUND" icon={<MusicIcon />} {...a11yProps(4)} />
            <Tab label="GRAPHIC" icon={<BrushIcon />} {...a11yProps(5)} />
          </Tabs>
        </Box>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomePage></HomePage>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EventPage></EventPage>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GamePage></GamePage>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProgramPage></ProgramPage>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SoundPage></SoundPage>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <GraphicPage></GraphicPage>
      </TabPanel>
    </div>
  );
}; //ここまでButton_B

const ScrollableTabsButtonForce: React.FC = () => {
  return <Button_A></Button_A>;
};
export default ScrollableTabsButtonForce;
