import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
    <div style={{ borderRadius: '2px', marginBottom: '20px' }}>
        <ContentLoader
            style={{ backgroundColor: 'white', borderRadius: '8px 8px' }}
            speed={2}
            width={404}
            height={188}
            viewBox="0 0 404 188"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="212" y="248" rx="6" ry="6" width="180" height="16" />
            <rect x="212" y="211" rx="6" ry="6" width="90" height="16" />
            <rect x="327" y="211" rx="6" ry="6" width="90" height="16" />
            <rect x="288" y="29" rx="14" ry="14" width="100" height="39" />
            <rect x="7" y="27" rx="14" ry="14" width="100" height="39" />
            <rect x="159" y="83" rx="6" ry="6" width="81" height="16" />
            <rect x="16" y="83" rx="6" ry="6" width="81" height="16" />
            <rect x="297" y="83" rx="6" ry="6" width="81" height="16" />
            <rect x="16" y="103" rx="6" ry="6" width="81" height="16" />
            <rect x="159" y="103" rx="6" ry="6" width="81" height="16" />
            <rect x="297" y="103" rx="6" ry="6" width="81" height="16" />
            <rect x="158" y="135" rx="6" ry="6" width="81" height="16" />
            <rect x="15" y="135" rx="6" ry="6" width="81" height="16" />
            <rect x="296" y="135" rx="6" ry="6" width="81" height="16" />
            <rect x="15" y="154" rx="6" ry="6" width="81" height="17" />
            <rect x="158" y="155" rx="6" ry="6" width="81" height="16" />
            <rect x="296" y="155" rx="6" ry="6" width="81" height="16" />
        </ContentLoader>
    </div>
);

export default Sceleton;
