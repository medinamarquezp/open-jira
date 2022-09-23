import { PropsWithChildren, FC } from "react";
import { Grid } from "@mui/material";

interface Props extends PropsWithChildren {
  centered?: boolean;
}

export const EntriesContainer: FC<Props> = ({ children, centered = false }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent={{ xs: centered ? "center" : "flex-start", md: "center" }}
      alignItems={{ xs: centered ? "center" : "flex-start", md: "center" }}
      marginTop="1px"
    >
      {children}
    </Grid>
  );
};
