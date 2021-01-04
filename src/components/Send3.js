import {NCPClient} from 'node-sens';

const Send3 = () => {
    const ncp = new NCPClient({
        phoneNumber: '01066860366',
        serviceId: 'ncp:sms:kr:262735726740:attendance',
        secretKey: 'avoGMaAXYsuaY0ZpA3aheAaR4KacVara3mj9ROlD',
        accessKey: '41hzvfNYAedKNMSCw5zj',
    });
    const { success, msg, status } = ncp.sendSMS({
        to: '01066860366',
        content: 'Hello SENS',
    });
    return (
        <div>
            잘될까
        </div>
    );
}

export default Send3;