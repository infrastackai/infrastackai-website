import toast from "react-hot-toast"


export function infrastackToast(type: string, message: string, duration: number = 2000, position: string = 'bottom-right') {
    if (type === 'success') {
      toast.success(message, {
        duration,
        position,
        style: {
          borderRadius: '10px',
          background: '#27272A',
          color: '#fff',
          fontSize: '14px'
        },
        iconTheme: {
          primary: 'white',
          secondary: 'black'
        }
      })
  
    } else if (type === 'success2') {
      toast.success(message, {
        duration,
        position,
        style: {
          borderRadius: '10px',
          background: '#16a34a',
          color: '#fff',
          fontSize: '14px'
        },
        iconTheme: {
          primary: 'white',
          secondary: '#16a34a'
        }
      })
  
    } else if (type === 'error') {
      toast.error(message, {
        duration,
        position,
        style: {
          borderRadius: '10px',
          background: '#f43f5e',
          color: '#fff',
          fontSize: '14px'
        },
        iconTheme: {
          primary: 'white',
          secondary: '#f43f5e'
        }
      })
    }
  }

  export const buttonStyles = {
    infrastack: "bg-violet-500 text-white hover:text-white hover:bg-violet-500/90 dark:bg-violet-500 dark:hover:bg-violet-500/90",
  }