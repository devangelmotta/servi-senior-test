/**
 *
 * Alerts
 *
 */
import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const CustomSwal = withReactContent(Swal)

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ErrorAlert({text, updateState}) {
  CustomSwal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: text,
      onClose: () => {
        clearInterval(updateState(''))
      }
    })
  return (<div/>)
}

export function Loading({close}) {
  close ?
  CustomSwal.fire({
    title: 'Please wait',
    html: 'Getting something good...',
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading()
    },
  }) : null;

  return (<div/>)
}
