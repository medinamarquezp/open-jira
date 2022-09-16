import { PropsWithChildren, FC } from "react";
import { Grid } from "@mui/material";

interface Props extends PropsWithChildren {}

export const EntriesContainer: FC<Props> = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent={{ xs: "flex-start", md: "center" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      marginTop="1px"
    >
      {children}
    </Grid>
  );
};
