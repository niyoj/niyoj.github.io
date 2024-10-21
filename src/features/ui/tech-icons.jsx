import Azure from "@assets/images/icons/tech/azure.svg?react";
import C from "@assets/images/icons/tech/c.svg?react";
import Code from "@assets/images/icons/tech/code.svg?react";
import Cpp from "@assets/images/icons/tech/cpp.svg?react";
import Css from "@assets/images/icons/tech/css.svg?react";
import Docker from "@assets/images/icons/tech/docker.svg?react";
import Express from "@assets/images/icons/tech/express.svg?react";
import FastAPI from "@assets/images/icons/tech/fast-api.svg?react";
import Git from "@assets/images/icons/tech/git.svg?react";
import JavaScript from "@assets/images/icons/tech/javascript.svg?react";
import Kaggle from "@assets/images/icons/tech/kaggle.svg?react";
import Latex from "@assets/images/icons/tech/latex.svg?react";
import MySQL from "@assets/images/icons/tech/mysql.svg?react";
import Next from "@assets/images/icons/tech/next.svg?react";
import Node from "@assets/images/icons/tech/node.svg?react";
import NPM from "@assets/images/icons/tech/npm.svg?react";
import Numpy from "@assets/images/icons/tech/numpy.svg?react";
import Pandas from "@assets/images/icons/tech/pandas.svg?react";
import PostgresSQL from "@assets/images/icons/tech/postgres-sql.svg?react";
import Python from "@assets/images/icons/tech/python.svg?react";
import PyTorch from "@assets/images/icons/tech/pytorch.svg?react";
import React from "@assets/images/icons/tech/react.svg?react";
import SASS from "@assets/images/icons/tech/sass.svg?react";
import SqlAlchemy from "@assets/images/icons/tech/sql-alchemy.svg?react";
import TensorFlow from "@assets/images/icons/tech/tensorflow.svg?react";
import PropTypes from "prop-types";

const keywordMap = {
  azure: Azure,
  c: C,
  cpp: Cpp,
  css: Css,
  docker: Docker,
  express: Express,
  "fast-api": FastAPI,
  git: Git,
  javascript: JavaScript,
  kaggle: Kaggle,
  latex: Latex,
  mysql: MySQL,
  next: Next,
  node: Node,
  npm: NPM,
  numpy: Numpy,
  pandas: Pandas,
  postgres: PostgresSQL,
  python: Python,
  pytorch: PyTorch,
  react: React,
  sass: SASS,
  sqlalchemy: SqlAlchemy,
  tensorflow: TensorFlow,
};

export function TechIcons({ keyword, className, props }) {
  const Component = keywordMap[keyword] ?? Code;

  return <Component className={className} {...props} />;
}

TechIcons.propTypes = {
  keyword: PropTypes.string.isRequired,
  props: PropTypes.object,
  className: PropTypes.string,
};
