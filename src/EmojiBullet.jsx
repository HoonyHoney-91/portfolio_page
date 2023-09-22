import { Box } from "@mui/material";

export  function EmojiBullet(props) {
    const { emoji, context } = props;

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
            <Box 
                component={'span'} 
                aria-label="cheese"
                role="img"
                mr={{ xs: '0.5rem', md: '1rem' }}
                fontSize={'1.5rem'}
            >
                {emoji}
            </Box>{' '}
            <span style={{ fontSize: '1rem' }}>{context}</span>
        </Box>
    );
}

export  function SocialIcon(props) {
    const {url, icon, label} = props;
    return (
        <a
            target="_blank" 
            aria-label={label}
            rel="noopener noreferrer" 
            href={url}
            style={{ 
                display: 'block',
                width: '100px',
                height: '100%',
                justifyContent: 'center'
              }}
            >
            <i 
                className={icon} 
                aria-hidden="true"
                style={{
                    display: 'block',
                    width: '50px',
                    height: '100%',
                    color:' #ffffff',
                    justifyContent: 'center'
                  }}
                />
        </a>
    );
}