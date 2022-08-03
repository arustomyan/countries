import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.loader}>
      <CircularProgress size={100} />
    </div>
  );
}

export default Loader;
