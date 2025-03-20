import React from 'react'
import styled from 'styled-components'
import { Select, message } from 'antd'
import { SelectValue, SelectProps as AntSelectProps } from 'antd/lib/select'


interface StyledSelectProps<T = SelectValue> extends AntSelectProps<T> {
  forwardRef?: React.Ref<any>
  ref?: any
  maxSelectedCount?: number
}

export interface SelectProps<T = SelectValue> extends StyledSelectProps<T> {
  render?: (values: any) => any
  useForm?: boolean
}

const StyledSelect: any = styled(Select)`
  &.ant-select {
    .ant-select-selector {
      border-radius: 4px !important;
      border: 0 !important;
    }

    .ant-select-selector:hover,
    .ant-select-selector:active,
    .ant-select-selector:focus {
      border-color: ${p => p.theme.input.bg};
      box-shadow: none;
    }

    .ant-select-selector {
      border-color: ${p => p.theme.input.bg};
      background-color: ${p => p.theme.input.bg};
    }

    // .ant-select-arrow-icon {
    //   position: relative;
    //   top: -1px;
    //   font-size: 14px;
    // }

    &.selection__multiple-items--hide
      .ant-select-selection--multiple
      .ant-select-selection__choice__disabled {
      display: none;
    }

    &.selection__schedule-items {
      .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        background-color: ${p => p.theme.input.bg};
        color: #fff !important;
      }
    }

    &.is--dark {
      .ant-select-item,
      .ant-select-selection-item {
        color: ${p => p.theme.input.color};
        font-size: 16px;
      }

      .ant-select-selector {
        border-color: ${p => p.theme.input.bg};
        background-color: ${p => p.theme.input.bg};
      }

      &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
        .ant-select-selector {
        border-color: ${p => p.theme.input.bg};
        background-color: ${p => p.theme.input.bg};
        box-shadow: none !important;
      }

      &.ant-select:not(.ant-select-disabled):hover {
        .ant-select-selector {
          border-color: ${p => p.theme.input.bg} !important;
        }

        .ant-select-arrow {
          color: inhert;
        }
      }

      &.ant-select-multiple {
        .ant-select-selector {
          padding: 2px 24px 2px 10px;
        }
        .ant-select-selection-item {
          color: ${p => p.theme.darkGrey};
          border-radius: 4px;
          border: solid 1px #e9e9e9;
          background: #f7f7f7;
          padding: 0px 8px;
          height: auto;
          font-size: 12px;
        }
        .ant-select-selection-item-remove {
          line-height: 1.45;
        }
      }

      .ant-select-arrow {
        color: ${p => p.theme.input.color};
      }

      .ant-select-clear {
        line-height: 0;
        border-radius: 100%;
      }

      .ant-select-item-option-active {
        background-color: #ffcc2b0f;
      }

      .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background-color: #ffcc2b0f;
        color: #fff !important;
      }

      .ant-select-dropdown {
        color: ${p => p.theme.input.color};
        background-color: ${p => p.theme.input.selectBg};

        .anticon {
          color: ${p => p.theme.beige};
        }
      }

      .ant-select-selection-placeholder {
        font-size: 16px;
      }

      &.ant-select-sm {
        .ant-select-selection-item {
          line-height: 24px;
        }
        .ant-select-selection-placeholder,
        .ant-select-selection-item,
        .ant-select-item-option {
          font-size: 14px !important;
        }
      }

      &.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
        .ant-select-selector {
        background-color: ${p => p.theme.input.bg} !important;
      }
    }
  }
`

export default class SelectComponent<T = any> extends React.Component<
  StyledSelectProps<T>,
  any
> {
  public static Option = Select.Option

  public static OptionGroup = Select.OptGroup

  public static displayName = 'Select'

  private _handleChange(value: any, option: any) {
    const { mode, maxSelectedCount = Infinity, onChange } = this.props
    if (mode === 'multiple' && value.size(value) > maxSelectedCount) {
      message.info("test")
      return
    }
    onChange && onChange(value, option)
  }

  render() {
    const { forwardRef, className, onChange, maxSelectedCount, ...others } =
      this.props
    return (
      <StyledSelect
        onChange={this.props.onChange} 
        className={`is--dark ${className}`}
        ref={forwardRef}
        getPopupContainer={(triggerNode: any) => triggerNode.parentNode as any}
        {...others}>
        {this.props.children}
      </StyledSelect>
    )
  }
}

export  { SelectComponent as Select }

