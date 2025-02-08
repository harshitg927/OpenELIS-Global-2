import { Grid, Column, Select, SelectItem } from "@carbon/react";
import { useIntl } from "react-intl";

const DoubleEntrySearch = () => {
  const intl = useIntl();

  return (
    <>
      <Grid>
        <Column sm={4} md={4} lg={4} className="status-select">
          <Select id="statusId" labelText="Form">
            <SelectItem value="" text="" />
          </Select>
        </Column>
      </Grid>
    </>
  );
};

export default DoubleEntrySearch;
