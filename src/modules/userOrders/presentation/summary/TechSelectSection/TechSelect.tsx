import { useIntl } from "react-intl";

import { IOption } from "types";

import { withSuspense } from "components/RemoteData";
import { FormControl } from "components/Form";
import { Select } from "components/Select";

import { useAdminsQuery } from "modules/users/infrastructure";

export const TechSelect = withSuspense(
  () => {
    const admins = useAdminsQuery();
    const { formatMessage } = useIntl();

    const options: IOption[] | undefined = admins?.collection.map((admin) => ({
      label: `${admin.firstName} ${admin.lastName}`,
      value: admin.userId,
    }));

    return (
      <FormControl name="techId" w="100%">
        {(
          { setValue, setError, clearErrors, register, getValues },
          fieldProps,
          { isInvalid }
        ) => {
          return (
            <Select
              {...fieldProps}
              {...register("techId", { required: true })}
              options={options!}
              isInvalid={isInvalid}
              placeholder={formatMessage({
                id: "UserOrderSummary.techSelect.placeholder",
                defaultMessage: "Wybierz opiekuna",
              })}
              onChange={({ target: { value } }) => {
                setValue("techId", value, { shouldValidate: true });
                if (value === "") {
                  setError("techId", {
                    message: "Określ opiekuna zgłoszenia",
                  });
                  return;
                }
                if (value) clearErrors("techId");
              }}
            />
          );
        }}
      </FormControl>
    );
  },
  //TODO: lepszy fallback
  { fallback: <></> }
);
