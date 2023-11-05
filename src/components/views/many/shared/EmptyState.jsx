import React from "react";
import PropTypes from "prop-types";
import modelPropTypes from "../../modelPropTypes";

import Alert from "../../../widgets/Alert/Alert";
import Button from "../../../widgets/Button/Button";
import { i18n_msg as i18n } from "../../../../i18n/i18n";

import "./EmptyState.scss";

const EmptyState = ({ model, inSearch }) => {
  let msg = inSearch ? i18n.noData : i18n.empty;
  msg = msg.replaceAll("{0}", model.namePlural);
  const content = (
    <>
      <div>{msg}</div>
      {inSearch && <div>{i18n.newCriteria}</div>}
      <Button
        url={"../" + model.id + "/edit/0"}
        icon="add"
        type="primary"
        label={i18n.addTheFirst.replaceAll("{0}", model.name)}
      />
    </>
  );
  return (
    <div className="empty-state">
      <Alert type="info" title={i18n.noResults} message={content} />
    </div>
  );
};

export default EmptyState;

EmptyState.propTypes = {
  model: modelPropTypes.isRequired,
  isNested: PropTypes.bool,
  /** Does the user have search or filter criterias? */
  inSearch: PropTypes.bool,
};

EmptyState.defaultProps = { isNested: false, inSearch: false };