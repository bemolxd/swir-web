import { useIntl } from "react-intl";

import { IOption } from "types";

import { FormControl } from "components/Form";
import { Select } from "components/Select";
import { withSuspense } from "components/RemoteData";

import { useAdminsQuery } from "modules/users/infrastructure";

export const TechSelectField = withSuspense(
  () => {
    const admins = useAdminsQuery();
    const { formatMessage } = useIntl();

    const options: IOption[] | undefined = admins?.collection.map((admin) => ({
      label: `${admin.firstName} ${admin.lastName}`,
      value: admin.userId,
    }));

    return (
      <FormControl
        name="techId"
        w="100%"
        label={formatMessage({
          id: "AdminOrderManagement.acceptModal.techId",
          defaultMessage: "Opiekun zgłoszenia:",
        })}
      >
        {({ setValue, register, getValues }, fieldProps, { isInvalid }) => {
          return (
            <Select
              {...fieldProps}
              {...register("techId")}
              options={options!}
              isInvalid={isInvalid}
              value={getValues("techId")}
              onChange={({ target: { value } }) => setValue("techId", value)}
            />
          );
        }}
      </FormControl>
    );
  },
  //TODO: lepszy fallback
  { fallback: <></> }
);
