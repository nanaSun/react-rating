import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const classNamesApi = classNames.bind({
  fill: '_fill',
  default: '_default',
  primary: '_primary',
  secondary: '_secondary',
  warning: '_warning',
  success: '_success',
  danger: '_danger',
  disabled: '_disabled',
  loading: '_loading',
  large: '_large',
  middle: '_middle',
  small: '_small',
  capsule: '_capsule',
  ghost: '_ghost',
  link: '_link',
  block: '_block',
});

const Button = ({
  baseClass,
  component,
  // 功能
  color,
  primary,
  secondary,
  warning,
  success,
  danger,
  // 变种
  variant,
  fill,
  ghost,
  link,
  large,
  middle,
  small,
  // 其它
  loading,
  capsule,
  block,
  ...otherProps
}) => {
  // 填充正确的class
  const { className, children, ...newProps } = otherProps;

  const boolClass = classNamesApi({
    primary,
    secondary,
    warning,
    success,
    danger,
    fill,
    ghost,
    link,
    large,
    middle,
    small,
    loading,
    capsule,
    block,
    disabled: otherProps.disabled,
  });

  // 当一个主色都没有的时候
  const newClass = classNames(baseClass, boolClass, className, {
    // 当一个主色都没有用默认颜色
    [`_${color}`]: !primary && !secondary && !warning && !success && !danger,
    // 当一个变体都没有用默认变体
    [`_${variant}`]: !fill && !ghost && !link,
  });

  const ComponentProp = newProps.href ? 'a' : component;
  if (component === 'button' && !newProps.type) {
    newProps.type = 'button';
  }
  return (
    <ComponentProp className={newClass} {...newProps}>
      <span>{children}</span>
    </ComponentProp>
  );
};

Button.propTypes = {
  /**
   * 基础的 class 名称
   */
  baseClass: PropTypes.string,
  /**
   * 链接,有链接的时候是A标签，没有是Button标签
   */
  href: PropTypes.string,
  /**
   * 外壳组件 默认为 button
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * 颜色
   */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'warning',
    'success',
    'danger',
  ]),
  /**
   * 主按钮（蓝色）
   */
  primary: PropTypes.bool,
  /**
   * 二级按钮（灰色）
   */
  secondary: PropTypes.bool,
  /**
   * 警告（黄色）
   */
  warning: PropTypes.bool,
  /**
   * 成功（绿色）
   */
  success: PropTypes.bool,
  /**
   * 错误（红色）
   */
  danger: PropTypes.bool,
  /**
   * 不可用状态
   */
  disabled: PropTypes.bool,
  /**
   * loading 状态
   */
  loading: PropTypes.bool,
  /**
   * 大号按钮
   */
  large: PropTypes.bool,
  /**
   * 中号按钮
   */
  middle: PropTypes.bool,
  /**
   * 小号按钮
   */
  small: PropTypes.bool,
  /**
   * 默认的变种
   */
  variant: PropTypes.oneOf(['ghost', 'link', 'fill']),
  /**
     * 实心按钮
     */
  fill: PropTypes.bool,
  /**
   * 幽灵按钮，只有边框没有背景的按钮
   */
  ghost: PropTypes.bool,
  /**
   * 链接按钮，只有文字样式的按钮
   */
  link: PropTypes.bool,
  /**
   * 胶囊按钮，左右都是圆角的按钮
   */
  capsule: PropTypes.bool,
  /**
   * 块状按钮，占一行的按钮
   */
  block: PropTypes.bool,
};

Button.defaultProps = {
  baseClass: 'nu_btn',
  component: 'button',
  color: 'default',
  variant: 'fill',
};

export default Button;
