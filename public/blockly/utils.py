import numpy as np
from brainflow.data_filter import DataFilter, FilterTypes

def get_brain_waves(eeg_data, sampling_rate):
    """
    Processes EEG data to extract brain wave bands: delta, theta, alpha, beta, and gamma.

    Args:
        eeg_data (numpy.ndarray): The raw EEG data for a single channel.
        sampling_rate (int): The sampling rate of the EEG data in Hz.

    Returns:
        dict: A dictionary containing filtered data for each brain wave band.
    """

    # Helper function to perform bandpass filtering
    def bandpass_filter(data, low_freq, high_freq, sampling_rate, order=4):
        DataFilter.perform_bandpass(data, sampling_rate, low_freq, high_freq, order, 
                                    FilterTypes.BUTTERWORTH_ZERO_PHASE.value, 0)
        return data

    # Apply bandpass filters for each frequency range
    delta = bandpass_filter(eeg_data.copy(), 0.5, 4, sampling_rate)
    theta = bandpass_filter(eeg_data.copy(), 4, 8, sampling_rate)
    alpha = bandpass_filter(eeg_data.copy(), 8, 13, sampling_rate)
    beta = bandpass_filter(eeg_data.copy(), 13, 30, sampling_rate)
    gamma = bandpass_filter(eeg_data.copy(), 30, 50, sampling_rate)

    # Log or print details of each band for debugging
    print(f"Delta: mean={np.mean(delta):.2f}, range=({np.min(delta):.2f}, {np.max(delta):.2f})")
    print(f"Theta: mean={np.mean(theta):.2f}, range=({np.min(theta):.2f}, {np.max(theta):.2f})")
    print(f"Alpha: mean={np.mean(alpha):.2f}, range=({np.min(alpha):.2f}, {np.max(alpha):.2f})")
    print(f"Beta: mean={np.mean(beta):.2f}, range=({np.min(beta):.2f}, {np.max(beta):.2f})")
    print(f"Gamma: mean={np.mean(gamma):.2f}, range=({np.min(gamma):.2f}, {np.max(gamma):.2f})")

    return {
        'delta': delta,
        'theta': theta,
        'alpha': alpha,
        'beta': beta,
        'gamma': gamma
    }